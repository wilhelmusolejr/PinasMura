<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductFlavor extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'flavor',
    ];
}