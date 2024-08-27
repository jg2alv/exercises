#lang sicp

(define (cbrt x)
  (cbrt-iter x 1.0))

(define (cbrt-iter x guess)
  (define (square x)
    (* x x))
  (define (cube x)
    (* x x x))
  (define (good-enough? x guess)
    (< (abs (- (cube guess) x)) 0.001))
  (define (improve x guess)
    (/ (+ (/ x (square guess)) (* 2 guess)) 3))
  (if (good-enough? x guess)
      guess
      (cbrt-iter x (improve x guess))))

(cbrt 8)