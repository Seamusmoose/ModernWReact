import React from "react";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const CompLessonIndex = () => {
  return (
    <div>
      <ApprovalCard>
        <CommentDetail
          text="this"
          image={faker.image.image()}
          time="yesterday 5pm"
          author="peter"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          text="is a"
          image={faker.image.image()}
          time="today 5pm"
          author="sam"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          text="test"
          image={faker.image.image()}
          time="yesterday 10pm"
          author="laura"
        />
      </ApprovalCard>
    </div>
  );
};

export default CompLessonIndex;
