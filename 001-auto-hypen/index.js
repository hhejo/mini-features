function addHyphen($telInput, hypenType) {
  const telNumber = $telInput.value;
  if (telNumber.length < 9) return;
  let result = '';
  if (hypenType === 1) {
    // 00-0000-0000 or 000-0000-0000
    result = telNumber
      .replace(/[^0-9]/g, '') // 숫자를 제외한 모든 문자 제거
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
      .replace(/(\-{1,2})$/g, '');
  } else if (hypenType === 2) {
    // 000-0000-0000
    result = telNumber
      .replace(/[^0-9]/g, '') // 숫자를 제외한 모든 문자 제거
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, `$1-$2-$3`)
      .replace(/(\-{1,2})$/g, '');
  }
  $telInput.value = result;
}

const $telInput1 = document.querySelector('#tel1');
$telInput1.addEventListener('input', () => addHyphen($telInput1, 1));

const $telInput2 = document.querySelector('#tel2');
$telInput2.addEventListener('input', () => addHyphen($telInput2, 2));
