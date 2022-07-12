<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PostController::class, 'index'])->middleware(['cors'])->name('post.index');
// Route::middleware(['cors'])
Route::post('/{id}', [PostController::class, 'store'])->name('post.store');
Route::post('/{id}', [PostController::class, 'edit'])->name('post.edit');
Route::get('/{id}', [PostController::class, 'show'])->name('post.show');
Route::delete('/{id}', [PostController::class, 'delete'])->name('post.delete');