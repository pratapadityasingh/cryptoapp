import Audits from '@/components/Audits'
import Auditfifth from '@/components/Audits/AuditFifth'
import Auditfourth from '@/components/Audits/AuditFourth'
import AuditThird from '@/components/Audits/Audithird/indexx'
import AuditSecond from '@/components/Audits/Auditsecond'
import Auditsixth from '@/components/Audits/Auditsixth'
import React from 'react'

const indexAudit = () => {
  return (
    <div>
      <Audits />
      <AuditSecond />
      <AuditThird />
      <Auditfourth />
      <Auditfifth />
      <Auditsixth />
    </div>
  )
}

export default indexAudit
