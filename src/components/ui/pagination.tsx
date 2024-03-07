import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1
  return (
    <div className="flex justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount}
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant={'outline'} className="sh-8 w-8 p-0">
            <ChevronsLeft h-4 w-4 />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant={'outline'} className="sh-8 w-8 p-0">
            <ChevronLeft h-4 w-4 />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button variant={'outline'} className="sh-8 w-8 p-0">
            <ChevronRight h-4 w-4 />
            <span className="sr-only">Página Anterior</span>
          </Button>
          <Button variant={'outline'} className="sh-8 w-8 p-0">
            <ChevronsRight h-4 w-4 />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
