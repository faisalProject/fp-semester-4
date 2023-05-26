<?php 
  if (!function_exists('messageError')) {
    function messageError($message) {
      if(is_array($message)) {
        $responseError = '';

        foreach($message as $value) {
          $responseError =  $value[0]; 
        }

        return response()->json([
          'msg' => $responseError,
          'statusCode' => 422
        ], 422);
      }

      throw new Exception("Message not array typed");
    }
  }
?>