
import { Link } from 'react-router-dom'

const CommonBtn = ({ btntxt, link }) => {
    return (
        <>
            <Link className="btn btn-effect " to={link} >
                <span>{btntxt}</span>
                <svg
                    width={20}
                    height={22}
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_59_254)">
                        <path
                            d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293"
                            stroke="white"
                            strokeWidth={2}
                        />
                        <path
                            d="M9.83594 20.8889L9.83594 0"
                            stroke="white"
                            strokeWidth={2}
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_59_254">
                            <rect
                                width="21.3333"
                                height={20}
                                fill="white"
                                transform="translate(20) rotate(90)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </Link>
        </>
    )
}

export default CommonBtn
