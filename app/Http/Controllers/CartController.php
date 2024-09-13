<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    // Fetch user's cart
    public function index(Request $request) {
        $userId = $request-> user_id;

        $cart = Cart::where('user_id', $userId)->with('product')->get();
        return response()->json($cart);
    }

    // Add an item to the cart
    public function store(Request $request) {
        // $userId = $request-> user_id;
        // $productId = $request-> product_id;
        // $quantity = $request-> quantity;

        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);


        // Check if the product already exists in the user's cart
        $cartItem = Cart::where('user_id', $validatedData['user_id'])
                        ->where('product_id', $validatedData['product_id'])
                        ->first();

        if ($cartItem) {
            // If the product already exists in the cart, update the quantity
            $cartItem->update([
                'quantity' => $cartItem->quantity + $validatedData['quantity'],
            ]);
        } else {
            // If the product is not in the cart, create a new entry
            Cart::create($validatedData);
        }

        return response()->json(['message' => 'Product added to cart successfully!'], 200);
    }

    public function clearCart(Request $request)
    {
        $userId = $request->user_id;

        // Clear the cart for the given user
        Cart::where('user_id', $userId)->delete();

        return response()->json(['message' => 'Cart cleared']);
    }
}
