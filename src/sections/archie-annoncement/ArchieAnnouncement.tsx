import './ArchieAnnouncement.css';
import arc from "./../../assets/arc.jpg";

const ArchieAnnouncement = () => {
    return (
        <div className="archie-announcement">
            <h2 className="section-title">Meet Archie – Our Officially Adopted Ape! 🦍❤️</h2>
            <img src={arc} alt="Archie the Ape" className="archie-image" />
            <p className="announcement">We’re proud to announce that on <strong>February 4, 2025</strong>, Mutant Archie Apes officially adopted <strong>Archie</strong> from the <strong>Center for Great Apes</strong>!</p>
            <p className="next-steps">Archie is now a part of our growing community, and we’re committed to supporting his care and well-being. As part of this adoption, we’ll get to <strong>visit him in Florida twice a year</strong> and connect with him through <strong>video visits</strong> as well!</p>
            <p className="next-steps">This is more than just an adoption—it’s a step toward making a real impact in ape conservation and giving back to the incredible creatures that inspire our project.</p>
            <p className="call-to-action">Stay tuned for updates, behind-the-scenes moments, and ways you can be part of Archie’s journey!</p>
            <p className="hashtags">#MutantArchieApes #ArchieTheApe #ApeConservation</p>
        </div>
    );
};

export default ArchieAnnouncement;