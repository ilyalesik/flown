/* @flow */

export type PathOr<O: Object, P, T> = $Call<(
  & (<A, B, C, D, E>([A, B, C, D, E]) => $ElementType<
    $ElementType<$ElementType<$ElementType<$ElementType<O, A>, B>, C>, D>
  , E>)
  & (<A, B, C, D>([A, B, C, D]) => $ElementType<
    $ElementType<$ElementType<$ElementType<O, A>, B>, C>
  , D>)
  & (<A, B, C>([A, B, C]) => $ElementType<
    $ElementType<$ElementType<O, A>, B>
  , C>)
  & (<A, B>([A, B]) => $ElementType<
    $ElementType<O, A>
  , B>)
  & (<A>([A]) => $ElementType<
    O
  , A>)
  & (() => T)
), P>

declare function pathOr<
  O, P, T, A: $Keys<O>, B, C, D, E
>(O, [A, B, C, D, E], T): $ElementType<{[E]: T, ...$Exact<PathOr<O, [A, B, C, D], {}>>}, E>
declare function pathOr<
  O, P, T, A: $Keys<O>, B, C, D
>(O, [A, B, C, D], T): $ElementType<{[D]: T, ...$Exact<PathOr<O, [A, B, C], {}>>}, D>
declare function pathOr<
  O, P, T, A: $Keys<O>, B, C
>(O, [A, B, C], T): $ElementType<{[C]: T, ...$Exact<PathOr<O, [A, B], {}>>}, C>
declare function pathOr<
  O, P, T, A: $Keys<O>, B
>(O, [A, B], T): $ElementType<{[B]: T, ...$Exact<PathOr<O, [A], {}>>}, B>
declare function pathOr<
  O, P, T, A: $Keys<O>
>(O, [A], T): $ElementType<O, A>
declare function pathOr<O, P, T>(O, P, T): T

export function pathOr() {}

export type _PathOr = typeof pathOr
