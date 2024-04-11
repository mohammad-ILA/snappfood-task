import { ReactNode } from "react";

export interface LoadMoreVirtualizedProps {
  data: any;
  endReached: () => void;
  increaseViewportBy: number;
  itemContent: (index: number, data: any) => ReactNode;
  loadMoreComponent: () => ReactNode;
}
