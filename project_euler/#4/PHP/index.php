<?php
    function main() {
        $palindrome;

        for ($i = 1; strlen((string)$i) <= 3;  $i++) {
            for ($j = 1; strlen((string)$j) <= 3;  $j++) {
                $result = $i * $j;
                if (strrev((string)$result) == $result)
                    $palindrome = "$result ($i x $j)";
            }
        }

        return $palindrome;
    }

    echo main();
?>