
class L1 {
  bubbleSort(input) {
    if (!input || !input.length) {
      return input;
    }

    let length = input.length;
    let count = 0;

    for (let pass=0; pass<length-1; pass++, count++) {
      for (let i=0; i<length-pass-1; i++) {
        if (input[i] > input[i+1]) {
          [input[i], input[i+1]] = [input[i+1], input[i]];
          count += 1;
        }
      }
    }

    return [input, count];
  }



  bubbleSortOptimized(input) {
    if (!input || !input.length) {
      return input;
    }

    let length = input.length;
    let count = 0;

    for (let pass=0; pass<length-1; pass++, count++) {
      let sorted = true;

      for (let i=0; i<length-pass-1; i++) {
        if (input[i] > input[i+1]) {
          [input[i], input[i+1]] = [input[i+1], input[i]];
          sorted = false;
          count += 1;
        }
      }

      if (sorted) {
        break;
      }
    }

    return [input, count];
  }



  selectionSort(input) {
    let count = 0;

    for(var i = 0; i < input.length; i++, count++) {
      var min = i;

      for(var j = i+1; j < input.length; j++) {
        if(input[j] < input[min]) {
          min = j;
          count++;
        }
      }

      [input[i], input[min]] = [input[min], input[i]];
    }

    return [input, count];
  }



  insertionSort(input) {
    let length = input.length;
    let count = 0;

    for (let i=1; i<length; i++, count++) {
      let temp = input[i];
      let j;

      for (j=i-1; j>=0 && input[j] > temp; j--) {
        input[j+1] = input[j];
        count++;
      }

      input[j+1] = temp;
    }

    return [input, count];
  }



  mergeSort(input) {
    if(input.length == 1 ) {
      return input;
    }

    let mid = input.length / 2;
    let left = input.slice(0, mid);
    let right = input.slice(mid);

    left = this.mergeSort(left);
    right = this.mergeSort(right);

    return this.merge(left, right);
  }



  merge(left, right) {
    let result=[];
    let leftIndex=0;
    let rightIndex=0;

    while(leftIndex<left.length && rightIndex<right.length) {
      if(left[leftIndex]>right[rightIndex]) {
        result.push(right[rightIndex]);
        rightIndex++;
      }
      else {
        result.push(left[leftIndex]);
        leftIndex++;
      }
    }

    while(leftIndex<left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }

    while(rightIndex<right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }

    return result;
  }



  quickSort(input, start, end) {
    let pivot;
    let index;

    if(start < end){
      pivot = end;
      index = this.quickSortPartition(input, pivot, start, end);

      this.quickSort(input, start, index - 1);
      this.quickSort(input, index + 1, end);
    }

    return input;
  }



  quickSortPartition(input, pivot, start, end) {
    let valueAtPivot = input[pivot];
    let index = start;

    while (start < end) {
      if(input[start] < valueAtPivot) {
        [input[start], input[index]] = [input[index], input[start]];
        index++;
      }

      start++;
    }

    [input[end], input[index]] = [input[index], input[end]];
    return index;
  }
}
