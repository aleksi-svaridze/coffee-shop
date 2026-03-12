import { CurrencySwitcherWrapper } from "../styles/CurrencySwitcher.style";

function CurrencySwitcher() {
  return (
    <CurrencySwitcherWrapper>
      <p>
        Currency:{" "}
        <select>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </p>
    </CurrencySwitcherWrapper>
  );
}

export default CurrencySwitcher;
