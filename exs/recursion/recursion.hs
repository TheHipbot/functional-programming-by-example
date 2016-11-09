-- let xs = [3, 6, 9, 12]

-- not tail recursive
sum' :: (Num a) => [a] -> a
sum' [] = 0
sum' (y:ys) = y + sum' ys

-- tail recursive with helper and accumlator
sum'' :: Num a => [a] -> a
sum'' ns = helper ns 0
  where helper [] acc = acc
        helper (y:ys) acc = helper ys (y + acc)
