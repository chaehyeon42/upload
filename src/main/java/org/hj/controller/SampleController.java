package org.hj.controller;

import java.util.Locale;

import org.hj.model.SampleVO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SampleController {
	// 비동기식은 동기식과는 다르게 jsp가 없으므로 순수한 데이터를 반환한다.
	// 기존 CONTROLLER에서는 문자열을 반환하는경우 JSP파일의 이름으로 처리하지만
	// 비동기식 CONTROLLER의 경우에는 순수한 데이터를 처리
	// 메서드의 리턴타입이 ResponseEntity 객체이면 비동기식으로 처리
	@RequestMapping(value = "/sample/getText", produces = "text/plain; charset=UTF-8", method = RequestMethod.GET)
	public ResponseEntity<String> getText() {
		// 순수한 데이터가 문자열("안녕하세요.")
		return new ResponseEntity<>("자고시퍼요", HttpStatus.OK);
	}

	// 객체
	@RequestMapping(value = "/sample/getSample", method = RequestMethod.GET)
	public ResponseEntity<SampleVO> getSample() {

		SampleVO sample = new SampleVO();
		sample.setNo(1);
		sample.setName("정자바");
		sample.setGender("남");

		ResponseEntity<SampleVO> result = null;
		result = ResponseEntity.status(HttpStatus.OK).body(sample);

		return result;
	}

	@RequestMapping(value = "/sample/getSample1", method = RequestMethod.POST)
	public ResponseEntity<SampleVO> getSample1(@RequestBody SampleVO sample) {

		System.out.println("samplmavo data....=" + sample);

		ResponseEntity<SampleVO> result = null;
		result = ResponseEntity.status(HttpStatus.OK).body(sample);

		return result;
	}

}
