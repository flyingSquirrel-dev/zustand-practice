import styled from "@emotion/styled"

interface Props {
  size: number;
}

export function Spacing({ size }: Props) {
  return <StyledSpacing size={size} />
}

const StyledSpacing = styled.div(({ size }: Props) => ({
  display: "flex",
  margin: `${size}px 0 0 0`,
}))