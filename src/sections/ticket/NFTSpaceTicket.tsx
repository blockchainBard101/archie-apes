import './NFTSpaceTicket.css';
import ticket from "./../../assets/ticket.jpg"

const NFTSpaceTicket = () => {
    return (
        <div className="nft-space-ticket">
            <h2 className="section-title">#NFTSPACETICKET</h2>
            <img src={ticket} alt="NFT Space Ticket" className="ticket-image" />
        </div>
    );
};

export default NFTSpaceTicket;
