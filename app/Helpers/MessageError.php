<?php
  namespace Helper;

  class MessageError {
    public static function message($messages) {
      if (is_array($messages)) {
        $res = '';
        foreach($messages as $key => $value) {
          $res .= $value[0];
        }
      }

      return response()->json([
        'status'=> 'error',
        'message' => $res
      ], 422);
    }
  }
?>