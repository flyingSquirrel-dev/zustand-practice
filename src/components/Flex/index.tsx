import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  directions?: CSSProperties['flexDirection'];
  gap?: number;
}

export function Flex({ children, align, justify, directions = 'row', gap = 0, ...rest }: Props) {
  return (
    <StyledFlex
      align={align}
      justify={justify}
      directions={directions}
      gap={gap}
      {...rest}
    >
      {children}
    </StyledFlex>
  )
}

const StyledFlex = styled.div(({
  align,
  justify,
  directions,
  gap
}: Pick<Props, 'align' | 'justify' | 'directions' | 'gap'>) => ({
  display: 'flex',
  justifyContent: justify,
  alignItems: align,
  flexDirection: directions,
  gap: `${gap}px`,
}))