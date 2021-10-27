export function ColorBox({ color }) {
  const styles = {
    height: "70px",
    width: "200px",
    backgroundColor: color,
    margin: "10px 0px"
  };
  return (
    <div style={styles}></div>

  );
}
