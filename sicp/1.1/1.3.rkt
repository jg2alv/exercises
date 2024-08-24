#lang sicp

(define (square a) (* a a))
(define (sum-square-two-larger a b c)
	(cond ((and (> a b) (> a c) (> b c)) (+ (square a) (square b))
	      ((and (b > a) (> b c) (> a c)) (+ (square a) (square b))
	      ((and (
