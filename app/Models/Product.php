<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'category',
        'price',
        'rate',
        'image',
    ];

    // Define the relationship with related products
    public function relatedProducts()
    {
        return $this->hasMany(RelatedProduct::class, 'product_id');
    }

    public function sizes() {
        return $this->hasMany(ProductSize::class);
    }

    public function colors() {
        return $this->hasMany(ProductColor::class);
    }

    public function flavors() {
        return $this->hasMany(ProductFlavor::class);
    }
}