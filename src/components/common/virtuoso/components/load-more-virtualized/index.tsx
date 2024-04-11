import { Virtuoso } from "react-virtuoso";
import { LoadMoreVirtualizedProps } from "./inex.tpyes";

const LoadMoreVirtualized: React.FC<LoadMoreVirtualizedProps> = ({
  data,
  endReached,
  increaseViewportBy,
  itemContent,
  loadMoreComponent,
}) => {
  return (
    <Virtuoso
      data={data}
      endReached={endReached}
      increaseViewportBy={increaseViewportBy}
      itemContent={itemContent}
      components={{ Footer: loadMoreComponent }}
    />
  );
};
export default LoadMoreVirtualized;
