(async () => {
  try {
    const res = await fetch('http://localhost:4200/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: '1234', password: '1234' })
    });
    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Body:', text);
  } catch (err) {
    console.error('Fetch error:', err && err.stack ? err.stack : err);
  }
})();