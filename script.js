/* Reset base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

body {
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background: #4a90e2;
  color: white;
  padding: 2rem;
  text-align: center;
}

main {
  flex-grow: 1;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1, h2 {
  margin-bottom: 1rem;
}

.info, .features {
  background: white;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
}

.features ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.cta {
  text-align: center;
}

#connect-btn {
  background: #4a90e2;
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgb(74 144 226 / 0.4);
  transition: background-color 0.3s ease;
}

#connect-btn:hover {
  background: #357ABD;
}

footer {
  text-align: center;
  padding: 1rem;
  background: #222;
  color: white;
  font-size: 0.9rem;
}
