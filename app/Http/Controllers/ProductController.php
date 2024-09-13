<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\RelatedProduct;
use Illuminate\Http\Request;

class ProductController extends Controller {

    public function index() {
        $products = Product::with('sizes', 'colors', 'flavors')->get();

        // Format the products
        $formattedProducts = $products->map(function ($product) {
            $options = [
                'sizes' => $product->sizes->map(function ($size) {
                    return ['id' => $size->id, 'size' => $size->size];
                }),
                'colors' => $product->colors->map(function ($color) {
                    return ['id' => $color->id, 'color' => $color->color];
                }),
                'flavors' => $product->flavors->map(function ($flavor) {
                    return ['id' => $flavor->id, 'flavor' => $flavor->flavor];
                }),
            ];

            return [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'category' => $product->category,
                'price' => $product->price,
                'rate' => $product->rate,
                'image' => $product->image,
                'options' => $options,  // Include the options object
                // 'related_products' => $relatedProducts,  // Include related products if defined
                'created_at' => $product->created_at,
                'updated_at' => $product->updated_at,
            ];
        });

        return response()->json($formattedProducts);
    }

    public function show($id) {
        // Fetch the product with its sizes, colors, and flavors
        $product = Product::with('sizes', 'colors', 'flavors')->findOrFail($id);

        // Fetch related products and format their response
        $relatedProducts = RelatedProduct::where('product_id', $id)
            ->with('relatedProduct.sizes', 'relatedProduct.colors', 'relatedProduct.flavors') // Eager load the related product with sizes, colors, and flavors
            ->get()
            ->map(function ($relatedProduct) {
                // Build the options object for each related product
                $options = [
                    'sizes' => $relatedProduct->relatedProduct->sizes->map(function ($size) {
                        return ['id' => $size->id, 'size' => $size->size];
                    }),
                    'colors' => $relatedProduct->relatedProduct->colors->map(function ($color) {
                        return ['id' => $color->id, 'color' => $color->color];
                    }),
                    'flavors' => $relatedProduct->relatedProduct->flavors->map(function ($flavor) {
                        return ['id' => $flavor->id, 'flavor' => $flavor->flavor];
                    }),
                ];

                return [
                    'id' => $relatedProduct->relatedProduct->id,
                    'name' => $relatedProduct->relatedProduct->name,
                    'description' => $relatedProduct->relatedProduct->description,
                    'category' => $relatedProduct->relatedProduct->category,
                    'price' => $relatedProduct->relatedProduct->price,
                    'rate' => $relatedProduct->relatedProduct->rate,
                    'image' => $relatedProduct->relatedProduct->image,
                    'options' => $options,  // Include the options object
                ];
            });

        // Build the options object for the main product
        $options = [
            'sizes' => $product->sizes->map(function ($size) {
                return ['id' => $size->id, 'size' => $size->size];
            }),
            'colors' => $product->colors->map(function ($color) {
                return ['id' => $color->id, 'color' => $color->color];
            }),
            'flavors' => $product->flavors->map(function ($flavor) {
                return ['id' => $flavor->id, 'flavor' => $flavor->flavor];
            }),
        ];

        // Format the response for the main product
        $response = [
            'id' => $product->id,
            'name' => $product->name,
            'description' => $product->description,
            'category' => $product->category,
            'price' => $product->price,
            'rate' => $product->rate,
            'image' => $product->image,
            'options' => $options,  // Include the options object for the main product
            'related_products' => $relatedProducts,  // Include related products with their options
            'created_at' => $product->created_at,
            'updated_at' => $product->updated_at,
        ];

        return response()->json($response);
    }

    public function list(Request $request) {
        $ids = $request->input('ids');

        if (!$ids || !is_array($ids)) {
            return response()->json(['message' => 'Invalid input, expected an array of IDs'], 400);
        }

        $products = Product::whereIn('id', $ids)->get();

        if ($products->isEmpty()) {
            return response()->json(['message' => 'No products found'], 404);
        }

        return response()->json($products);
    }
}
