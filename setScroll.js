//첫번째인수로 기준점이 될 frame요소 지정, 두번째 인수로 스크롤 모션이 적용될 커스텀 시점지정 (기본값 0)
function setScroll(frame, baseLine = 0) {
	//내부적으로 scroll값 동적생성
	const scroll = window.scrollY;
	let scroll2 = 0;
	//첫번째와 두번째 인수로 넘어오는 부모세로위치값과 base보정값을 적용한 영역에 도달하면 scroll값 변경시작
	//만약 벗어나면 원래 위치값으로 scroll값 초기화
	scroll >= frame.offsetTop + baseLine ? (scroll2 = scroll - frame.offsetTop - baseLine) : (scroll2 = 0);
	//위에서 만들어지고 있는 스크로값을 실시간으로 리턴
	return scroll2;
}
