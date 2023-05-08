<?php 
  if (!function_exists('messageError')) {
    function messageError($message) {
      if(is_array($message)) {
        $responseError = '';
        
        foreach($message as $key => $value) {
          $responseError = $key . ": " . $value[0] . ", "; 
        }

        return response()->json($responseError, 422);
      }

      throw new Exception("Message not array typed");
    }
  }
?>