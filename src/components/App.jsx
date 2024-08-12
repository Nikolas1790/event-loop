export const App = () => {
  console.log("ddd")
  console.log("aaa")
  console.log("sss")
  setTimeout(() => {
    console.log("ddddddd")
    }, 500)
  console.log("xxx")

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
