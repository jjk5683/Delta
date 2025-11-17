const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbym8kDFqCa8zJUx-CwqK7eG2Qhc0TqMrP4mJ5zL872mSLFR91LIWZFATeKkOo5_xYbk/exec';

async function getSubjects(grade) {
  const response = await fetch(`${SCRIPT_URL}?action=getSubjects&grade=${encodeURIComponent(grade)}`);
  const data = await response.json();
  return data;
}

async function getLectures(grade, subject) {
  const response = await fetch(`${SCRIPT_URL}?action=getLectures&grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(subject)}`);
  const data = await response.json();
  return data;
}

async function submitForm(name, grade, school, studentContact, parentContact, courses, isResubmission) {
  const response = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "submitForm",
      name,
      grade,
      school,
      studentContact,
      parentContact,
      courses,
      isResubmission
    })
  });
  const data = await response.json();
  return data;
}

async function getSubmittedCourses(name, grade, parentContact) {
  const response = await fetch(`${SCRIPT_URL}?action=getSubmittedCourses&name=${encodeURIComponent(name)}&grade=${encodeURIComponent(grade)}&parentContact=${encodeURIComponent(parentContact)}`);
  const data = await response.json();
  return data;
}

async function getStudentApplication(name, grade, parentContact) {
  const response = await fetch(`${SCRIPT_URL}?action=getStudentApplication&name=${encodeURIComponent(name)}&grade=${encodeURIComponent(grade)}&parentContact=${encodeURIComponent(parentContact)}`);
  const data = await response.json();
  return data;
}
