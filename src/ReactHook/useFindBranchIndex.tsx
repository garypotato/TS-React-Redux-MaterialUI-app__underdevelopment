import { useEffect, useState } from 'react'
import { IBranch } from '../type.d'
import { selectedBranchIndexFunction } from '../utils/_utils'

const useFindBranchIndex = (
  showBranch: IBranch[] | undefined,
  selectedBranch: number | undefined
) => {
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(3)
  useEffect(() => {
    if (showBranch && selectedBranch) {
      let index = selectedBranchIndexFunction(selectedBranch, showBranch)
      setSelectedBranchIndex(index)
    }
  }, [showBranch, selectedBranch])

  return selectedBranchIndex
}

export default useFindBranchIndex
