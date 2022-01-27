import { nanoid } from 'nanoid';
import { FC, memo, RefObject, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHover from '../../hooks/useHover';
import {useMobile} from '../../hooks/useMobile';
import { setPageId } from '../../store/actions/pageId';
import { selectPageCount, selectPageId } from '../../store/selectors';
import { ArrayUtils, getSvgUrl, handleOnCondition } from '../../utils/common';
import { StyledImage } from '../styles/common.styled';
import {
  StyledPageSelector,
  StyledPageSlider,
  StyledPageSelectorButton,
  StyledPageSelectorButtons, 
  StyledPageSelectorDirection,
} from '../styles/PageSelector.styled';
import Spacer from './Spacer';

const PageSelectorButtons = memo(
  (props: {
    generatePageSelectorButtons: (
      pageId: number,
      pageCount: number
    ) => JSX.Element[];
  }) => {
    const pageId = useSelector(selectPageId);
    const pageCount = useSelector(selectPageCount);
    const dispatch = useDispatch();
    return (
      <StyledPageSelectorButtons>
        {pageCount < 9
          ? ArrayUtils.range(1, pageCount).map((n) => (
              <StyledPageSelectorButton
                href='#jump-point'
                onClick={handleOnCondition(n !== pageId, () =>
                  dispatch(setPageId(n))
                )}
                $active={n === pageId}
                key={n}
              >
                {n}
              </StyledPageSelectorButton>
            ))
          : props.generatePageSelectorButtons(pageId, pageCount)}
      </StyledPageSelectorButtons>
    );
  }
);

const PageSelector: FC = () => {
  const isMobile = useMobile();
  const [leftArrowRef, isLeftArrowHovered] = useHover<HTMLDivElement>() as [
    RefObject<HTMLDivElement>,
    boolean
  ];
  const [rightArrowRef, isRightArrowHovered] = useHover<HTMLDivElement>() as [
    RefObject<HTMLDivElement>,
    boolean
  ];
  const dispatch = useDispatch();
  const pageId = useSelector(selectPageId);
  const pageCount = useSelector(selectPageCount);
  const generatePageSelectorButtons = useCallback(
    (pageId: number, pageCount: number) => {
      const keys = ArrayUtils.range(1, 9).map(() => nanoid());
      const n = pageCount;
      const i = pageId;
      const transformationArray =
        pageId < 4
          ? [1, 2, 3, 4, -1, n - 3, n - 2, n - 1, n]
          : pageId === 4
          ? [1, -1, 3, 4, 5, 6, -1, n - 1, n]
          : pageId > 4 && pageId < pageCount - 3
          ? [1, 2, -1, i - 1, i, i + 1, -1, n - 1, n]
          : pageId === pageCount - 3
          ? [1, 2, -1, n - 5, n - 4, n - 3, n - 2, -1, n]
          : pageId > pageCount - 3
          ? [1, 2, 3, 4, -1, n - 3, n - 2, n - 1, n]
          : [-1];
      return transformationArray.map((n, i) =>
        n !== -1 ? (
          <StyledPageSelectorButton
            href='#jump-point'
            onClick={handleOnCondition(n !== pageId, () =>
              dispatch(setPageId(n))
            )}
            $active={n === pageId}
            key={keys[i]}
          >
            {n}
          </StyledPageSelectorButton>
        ) : (
          <StyledImage
            key={keys[i]}
            style={{ margin: '0 12px' }}
            $width={10}
            src={getSvgUrl('three-dots')}
            alt='Three dots'
          />
        )
      );
    },
    [dispatch]
  );
  return pageCount === 0 ? null : isMobile ? (
    <StyledPageSlider>
      {ArrayUtils.range(1, pageCount).map((n) => (
        <StyledPageSelectorButton
          onClick={handleOnCondition(n !== pageId, () =>
            dispatch(setPageId(n))
          )}
          key={n}
          $active={n === pageId}
          href='#jump-point'
        >
          {n}
        </StyledPageSelectorButton>
      ))}
    </StyledPageSlider>
  ) : (
    <StyledPageSelector>
      <div ref={leftArrowRef}>
        <StyledPageSelectorDirection
          href='#jump-point'
          onClick={handleOnCondition(pageId > 1, () =>
            dispatch(setPageId(pageId - 1))
          )}
          $active={isLeftArrowHovered}
        >
          <StyledImage
            $width={14}
            alt={'Left Arrow'}
            src={getSvgUrl(
              isLeftArrowHovered ? 'arrow-left-active' : 'arrow-left'
            )}
          />
          <Spacer size={12} />
          Prev
        </StyledPageSelectorDirection>
      </div>
      <PageSelectorButtons
        generatePageSelectorButtons={generatePageSelectorButtons}
      />
      <div ref={rightArrowRef}>
        <StyledPageSelectorDirection
          href='#jump-point'
          onClick={handleOnCondition(pageId < pageCount, () =>
            dispatch(setPageId(pageId + 1))
          )}
          $active={isRightArrowHovered}
        >
          Next
          <Spacer size={12} />
          <StyledImage
            $width={14}
            alt={'Right Arrow'}
            src={getSvgUrl(
              isRightArrowHovered ? 'arrow-right-active' : 'arrow-right'
            )}
          />
        </StyledPageSelectorDirection>
      </div>
    </StyledPageSelector>
  );
};

export default PageSelector;
