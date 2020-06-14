
# Bubble Sort (sinking sort): 

Defination (wiki)
> repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.

In simple terms:
> find max/min element by comparing to the next element from every traverse and place it to the end


|   Class           |   Sorting algorithm   |
|-------------------|-----------------------|
|   Data structure  |   Array   |
|   Worst-case      |   o(n^2) comparisions   |
|                   |   o(n^2) swaps   |
|   Average-case    |   o(n^2) comparisions   |
|                   |   o(n^2) swaps   |
|   Best-case       |   o(n) comparisions   |
|                   |   o(1) swaps   |
|   WC Space        |   o(n) total   
|   complexity      |   o(1) swaps   


---

## Optimized Bubble sort

```
procedure bubbleSort(A : list of sortable items)
    n := length(A)
    repeat
        swapped := false
        for i := 1 to n - 1 inclusive do
            if A[i - 1] > A[i] then
                swap(A[i - 1], A[i])
                swapped = true
            end if
        end for
        n := n - 1
    until not swapped
end procedure
```

simple js
```
a = [...array of element];
for(i = 0 to n){
	for(j = 0 to n - i - 1){
		if(a[j] > a[j+1]){
			swap(a, j, j+1)
		}
	}
}
```

Complexity
Worst Case and average complexity of О(n2)
Best Case : O(n)

---
## Points to remember
1. complexity order -> bubble sort < insertion sort < [quick sort, merge sort]
2. adv of bubble sort over quicksort (but not insertion sort): ability to detect that the list is sorted

---

## Optimized by

### Cocktail shaker sort 
other names : bidirectional bubble sort, Cocktail sort, shaker sort, selection sort, ripple sort, suffle sort, shuttle sort

```
procedure cocktailShakerSort(A : list of sortable items) is
    do
        swapped := false
        for each i in 0 to length(A) − 2 do:
            if A[i] > A[i + 1] then // test whether the two elements are in the wrong order
                swap(A[i], A[i + 1]) // let the two elements change places
                swapped := true
            end if
        end for
        if not swapped then
            // we can exit the outer loop here if no swaps occurred.
            break do-while loop
        end if
        swapped := false
        for each i in length(A) − 2 to 0 do:
            if A[i] > A[i + 1] then
                swap(A[i], A[i + 1])
                swapped := true
            end if
        end for
    while swapped // if no elements have been swapped, then the list is sorted
end procedure
```
Display :

![Alt Text](https://upload.wikimedia.org/wikipedia/commons/e/ef/Sorting_shaker_sort_anim.gif)

Complexity:


|Class	| Sorting algorithm|
|-------|-----|
|Data structure|Array|
|Worst-case performance |	O(n^2)|
Best-case performance	| O(n^2),
Average performance	| O(n^2)
Worst-case space complexity	|O(1)