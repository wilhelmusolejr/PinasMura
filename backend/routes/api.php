<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RelatedProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', [UserController::class, 'index']);

Route::get('/products', [ProductController::class, 'index']);
Route::post('/products/list', [ProductController::class, 'list']);
Route::get('/products/{id}', [ProductController::class, 'show']);

Route::post('/cart', [CartController::class, 'index']);
Route::post('/cart/add', [CartController::class, 'store']);

Route::post('/order/add', [OrderController::class, 'store']);