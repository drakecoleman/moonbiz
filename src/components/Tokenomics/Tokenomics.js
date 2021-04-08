import {
  StyledTokenomics,
  TokenomicsCard,
  TokenomicsCards,
  TokenomicsHeading,
  TokenomicsOverlay,
  TokenomicsVideo,
} from "./tokenomics.modules";
import { BsInboxes } from "react-icons/bs";
import {
  AiOutlineDollarCircle,
  AiOutlineFire,
  AiOutlineTeam,
} from "react-icons/ai";
import Flame from "./flame.js";
import Text from "./text.js";

import Moon1 from "../../assets/moon-1.mp4";

const Tokenomics = () => {
  return (
    <StyledTokenomics id="tokenomics">
      <TokenomicsVideo src={Moon1} autoPlay loop muted />
      <TokenomicsHeading>Tokenomics</TokenomicsHeading>
      <TokenomicsOverlay />
      <TokenomicsCards>
        <TokenomicsCard>
          <BsInboxes />
          <h3>Supply</h3>
          <p>1000 Trillion</p>
        </TokenomicsCard>
        <TokenomicsCard>
          {/* <AiOutlineFire /> */}
          <Flame />
          <Text />
        </TokenomicsCard>
        <TokenomicsCard>
          <AiOutlineDollarCircle />
          <h3>TAXES</h3>
          <p>10% tax 5% to holders 5% to LP</p>
        </TokenomicsCard>
        <TokenomicsCard>
          <AiOutlineTeam />
          <h3>TEAM</h3>
          <p>3% Dev Wallet</p>
        </TokenomicsCard>
      </TokenomicsCards>
    </StyledTokenomics>
  );
};

export default Tokenomics;
