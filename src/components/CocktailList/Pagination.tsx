import '../../css/Pagination.css';

interface IPaginationProps {
  activeDataSet: number;
  paginate: (arg: number) => void;
  maxPage: number;
}

export function Pagination({
  activeDataSet,
  paginate,
  maxPage,
}: IPaginationProps) {
  return (
    <div className='pagination'>
      {activeDataSet > 0 ? (
        <span
          onClick={() => paginate(-1)}
          className='material-symbols-outlined arrow'>
          chevron_left
        </span>
      ) : (
        <div className='placeholder' />
      )}
      {maxPage > 0 ? (
        <p className='current-page'>{`${activeDataSet + 1}(${maxPage + 1})`}</p>
      ) : null}
      {activeDataSet < maxPage ? (
        <span
          onClick={() => paginate(1)}
          className='material-symbols-outlined arrow'>
          chevron_right
        </span>
      ) : (
        <div className='placeholder' />
      )}
    </div>
  );
}
