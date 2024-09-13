<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {

        $products = $request->products;

        $request->validate([
            'user_id' => 'required|integer',
            'total' => 'required|numeric',
            'name' => 'required|string',
            'address' => 'required|string',
            'products' => 'required|array',
        ]);

        $order = Order::create([
            'name' => $request->name,
            'address' => $request->address,
            'total' => $request->total,
            'user_id' => $request->user_id,
            'status' => 'pending',
            'payment_status' => "COD",
        ]);

        // add order items in order item table
        foreach ($products as $product) {
            $order->items()->create([
                'order_id' => $order->id,
                'product_id' => $product['id'],
                'quantity' => $product['quantity'],
                'price' => $product['price'],
            ]);
        }

        // Clear the cart
        $cartController = new CartController();
        $cartController->clearCart($request);

        return response()->json($order);
    }
}
