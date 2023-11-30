function skillsMember()  {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controllerAs: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
        member: '-'
        }
    };
}
