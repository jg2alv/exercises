#lang sicp

(define (sqrt x)
  (sqrt-iter 1.0 x))

(define (sqrt-new x)
  (sqrt-iter-new 1.0 0 x))

(define (sqrt-iter guess x)
  (define (square x)
    (* x x))
  (define (good-enough? guess x)
    (< (abs (- (square guess) x)) 0.001))
  (define (average x y)
    (/ (+ x y) 2))
  (define (improve guess x)
    (average guess (/ x guess)))
  (if (good-enough? guess x)
      guess
      (sqrt-iter (improve guess x) x)))

(define (sqrt-iter-new newguess oldguess x)
  (define (square x)
    (* x x))
  (define (good-enough? newguess oldguess x)
    (< (abs (- 1.0 (/ oldguess newguess))) 0.001))
  (define (average x y)
    (/ (+ x y) 2))
  (define (improve guess x)
    (average guess (/ x guess)))
  (if (good-enough? newguess oldguess x)
      newguess
      (sqrt-iter-new (improve newguess x) newguess x)))

(sqrt 0.0000025)
(sqrt-new 0.0000025)
