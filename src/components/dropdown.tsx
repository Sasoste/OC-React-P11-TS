import '../styles/components/dropdown.scss';
import { useState, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


interface DropdownProps {
    title: string;
    content: string | string[];
}

const Dropdown: FC<DropdownProps> = ({ title, content }) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="dropdown" onClick={toggleCollapse}>
            <div className="test"></div>
            <span className="title">
                {title}
                <FontAwesomeIcon icon={isCollapsed ? faChevronUp : faChevronDown} />
            </span>
            <div className={`content ${isCollapsed ? "collapsed" : "hidden"}`}>
                <div className="contentStyle">
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index} className="content-item">{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;