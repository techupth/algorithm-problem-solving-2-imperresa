function findStudentIndex(students, searchStudent) {
	let left = 0
	let right = students.length - 1
	let index = -1 
	while(left<=right){
		let mid = Math.floor((left+right)/2)
		if(students[mid] === searchStudent){
			index = mid
			break
		}else if (students[mid]<searchStudent){
			left = mid +1
		}else{
			right = mid -1
		}
	}
	return index
}

// ตอบคำถามตรงนี้จ้า

// O(log n) เพราะเป็น binary search ที่มีการเรียงลำดับตัวอักษรอยู่แล้ว

 let students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
 console.log(findStudentIndex(students,"John"));