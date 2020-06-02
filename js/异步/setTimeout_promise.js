/**
 * 间隔固定时间发送异步请求
 * setTimeout 和 promise
 */

// 每间隔1.5秒获取计算状态
function timer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch({ id }).then((res) => {
        resolve(res.data.status);
      }).catch((err) => {
        reject(err);
      });
    }, 1500);
  });
}
// 异步轮询请求
async function loop(id) {
  let status = null;
  while (status !== 'success') {
    // eslint-disable-next-line no-await-in-loop
    status = await timer(id);
  }
  return status;
}
// 定时轮询发送异步请求
async function async(params) {
  const result = await fetch(params);
  const id = result.data.id;
  if (id) {
    // eslint-disable-next-line no-return-await
    return loop(id).then(async () => await Action.fetchEventAnalysisRes(id));
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject('err');
}