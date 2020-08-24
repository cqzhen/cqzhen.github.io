[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Go

### Exercise Code

#### Code One

```
package main

import (
	"fmt"
)

type Mobile interface {
	call()
	eat()
}

type Iphone struct {}

type NokiaPhone struct {}

func (iphone Iphone) call() {
	fmt.Println("I'm a iphone,i can call you")
}

func (iphone Iphone) eat() {
	fmt.Println("I'm a iphone,i can eat you")
}

func (nokiaPhone NokiaPhone) call() {
	fmt.Println("I'm a nokiaPhone, i can call you too")
}

func (nokiaPhone NokiaPhone) eat() {
	fmt.Println("I'm a nokiaPhone, i can call you too")
}

func getSum(nums []int, target int) []int {

	anotherMap := make(map[int]int)

	for index, num := range nums {
		another := target - num
		if _, ok  := anotherMap[another]; ok {
			return []int{anotherMap[another], index}
		}
		anotherMap[num] = index
	}
	return nil
}

func getArea(nums []int) int {
	area, start, end := 0, 0, len(nums) - 1
	for start < end {
		height := 0
		width := end - start
		if nums[start] < nums[end] {
			height = nums[start]
			start++
		} else {
			height = nums[end]
			end--
		}
		areaM := height * width
		if areaM > area {
			area = areaM
		}
	}
	return area
}

func main() {
	fmt.Println("Hello, playground")
	var phone Mobile
	phone = new(Iphone)
	phone.call()

	phone = new(NokiaPhone)
	phone.call()
	nums := []int{5, 6, 3, 4, 5}
	towSum := getSum(nums, 7)
	fmt.Println(towSum)
	area := getArea(nums)
	fmt.Println(area)
}
```
