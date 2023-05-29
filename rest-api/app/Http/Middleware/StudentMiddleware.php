<?php

namespace App\Http\Middleware;

use Closure;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Firebase\JWT\ExpiredException;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StudentMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            $jwt = $request->bearerToken();
            $decoded = JWT::decode($jwt, new Key(env('JWT_SECRET_KEY'), 'HS256'));

            if ($decoded->email !== 'admin@admin.com') {
                $request['user_id'] = $decoded->id_student;
                return $next($request);
            } else {
                return response()->json("Unauthorized", 401);
            }
        } catch (ExpiredException $e){
            return response()->json($e->getMessage(), 400);
        }
    }
}
