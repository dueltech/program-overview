export default `
.builder-container {
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  background-size: cover;
  background-position: center;
}
h2 {
  margin: 0;
  padding: 1.5rem 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}
header {
  width: 100%;
  min-height: 400px;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
header h2 {
  letter-spacing: 10px;
  font-size: 48px;
}
a {
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
}
.button {
  display: inline-block;
  padding: 1rem 3rem;
  background: #666;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
}
img {
  max-width: 100%;
}

.icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1.5rem 0;
}
.icons > * {
  margin: 1.5rem;
  width: 7.25rem;
}

.duel-gallery-container {
  width: 100%;
}

table, th, td {
  border-collapse: collapse;
}
th, td {
  margin: 0;
  border: 1px solid;
  padding: 1.5rem 1rem;
  font-size: 11pt;
  text-align: center;
}
th {
  text-transform: uppercase;
}
td {
  font-weight: 500;
}
th:first-child, td:first-child {
  text-align: left;
}
table .icon-checkmark {
  color: #57b358;
  font-size: 1.5rem;
}

@media only screen and (max-width: 600px) {
  .icons[mobile-2] {
    justify-content: space-around;
  }
  .icons[mobile-2] > div {
    margin-right: 5%;
    margin-left: 5%;
  }
}
@media only screen and (max-width: 750px) {
  .icons > * {
    margin: 1.25rem;
  }
}
@media only screen and (max-width: 675px) {
  .icons > * {
    margin: 0.75rem;
  }
}
@media only screen and (max-width: 600px) {
  .icons > * {
    margin: 0.5rem;
  }
}
@media only screen and (max-width: 450px) {
  header {
    min-height: auto;
  }
  th, td {
    padding: 0.75rem;
    font-size: 9pt;
  }
  th {
    min-width: auto;
  }
  .icons > * {
    width: 6.25rem;
    margin: 0.25rem;
  }
  .icons[mobile-2] > * {
    width: 7.25rem;
  }
}
`;
