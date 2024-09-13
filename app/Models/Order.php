<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'total',
        'user_id',
        'status',
        'payment_status',
    ];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
