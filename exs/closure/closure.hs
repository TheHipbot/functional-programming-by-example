incr :: Num a => a -> a
incr = let x = 1
       in (\y -> x + y)
