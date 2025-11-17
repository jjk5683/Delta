const API_URL = 'https://script.google.com/macros/s/AKfycbym8kDFqCa8zJUx-CwqK7eG2Qhc0TqMrP4mJ5zL872mSLFR91LIWZFATeKkOo5_xYbk/exec';

// 데이터 불러오기
async function loadData() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log('기존 신청자:', data);
    // 예: 테이블에 표시
    const table = document.getElementById('applicantsTable');
    if(table){
      data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.name}</td><td>${item.email}</td><td>${item.course}</td>`;
        table.appendChild(row);
      });
    }
  } catch(err) {
    console.error(err);
  }
}

// 데이터 전송
async function submitData(name, email, course) {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, course }),
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await res.json();
    console.log(result);
    alert('신청 완료!');
    loadData(); // 제출 후 최신 데이터 로드
  } catch(err) {
    console.error(err);
    alert('데이터 전송 실패!');
  }
}

// 폼 이벤트 연결
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    submitData(
      document.getElementById('name').value,
      document.getElementById('email').value,
      document.getElementById('course').value
    );
  });
  loadData();
});
