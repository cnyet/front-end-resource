                 /**
 * 归并排序 
 * 先把数组从中间划分成两个子数组，一直递归地把子数组划分成更小的子数组，直到子数组里面只有一个元素，才开始排序
 * 排序的方法就是按照大小顺序合并两个元素，接着依次按照递归的返回顺序，不断地合并排好序的子数组，
 * 直到最后把整个数组的顺序排好
 */
function sort(arr, lo, hi) {
  // 判断是否只剩下最后一个元素
  if  (lo  >=  hi)  return;
  // 从中间将数组分成两个部分
  var mid  =  lo  +  (hi  -  lo)  /  2;
  // 分别递归地将左右两半排好序
  sort(A,  lo,  mid);  
  sort(A,  mid  +  1,  hi);
  // 将排好序的左右两半合并 
  merge(A,  lo,  mid,  hi);
}

function merge(nums, lo, mid, hi) {
  // 复制一份原来的数组
  var  copy  =  nums.clone();
  // 定义一个 k 指针表示从什么位置开始修改原来的数组，i 指针表示左半边的起始位置，j 表示右半边的起始位置
  var k  =  lo;
  var i  =  lo;
  var j  =  mid  +  1;
  while  (k  <=  hi)  {
    if  (i  >  mid)  {            
      nums[k++]  =  copy[j++];        
    } else if  (j  >  hi)  {          
      nums[k++]  =  copy[i++];        
    } else if  (copy[j]  <  copy[i])  {          
      nums[k++]  =  copy[j++];        
    } else  {          
      nums[k++]  =  copy[i++];        
    }
  }
}