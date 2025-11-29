
export default function Pagination() {
    return (
        <div className="pagination">
            <button className="pagination-btn">
                <i className="bi bi-arrow-left"></i>
            </button>
            <button className="page-number">01</button>
            <button className="page-number active">02</button>
            <button className="page-number">03</button>
            <button className="page-number">04</button>
            <button className="page-number">05</button>
            <button className="pagination-btn">
                <i className="bi bi-arrow-right"></i>
            </button>
        </div>
    )
}
