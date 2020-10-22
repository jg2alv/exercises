<?php
    function main() {
        $n = 600851475143;
        $largest = [];

        for ($i = 1; $i < $n; $i++)
            if ($n % $i === 0)
                array_push($largest, $i);

        $largest = array_filter($largest, function($n) { return in_array($n, [1, 2, 3, 5, 7]) || ($n % 2 !== 0 && $n % 3 !== 0 && $n % 5 !== 0 && $n % 7 !== 0); });
        foreach($largest as $n) {
            $j = $n / 2;
            for ($i = 2; $i <= $j; $i++)
                if ($n % $i === 0)
                    $continue = true;

            if (!empty($continue))  continue;

            $largest = $n > 1 ? $n : $largest;
        }

        return $largest;
    }

    echo main();
?>