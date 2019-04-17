export const introspectionQueryResultData = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'Node',
        possibleTypes: [
          { name: 'AddedToProjectEvent' },
          { name: 'App' },
          { name: 'AssignedEvent' },
          { name: 'BaseRefChangedEvent' },
          { name: 'BaseRefForcePushedEvent' },
          { name: 'Blob' },
          { name: 'Bot' },
          { name: 'BranchProtectionRule' },
          { name: 'ClosedEvent' },
          { name: 'CodeOfConduct' },
          { name: 'CommentDeletedEvent' },
          { name: 'Commit' },
          { name: 'CommitComment' },
          { name: 'CommitCommentThread' },
          { name: 'ConvertedNoteToIssueEvent' },
          { name: 'CrossReferencedEvent' },
          { name: 'DemilestonedEvent' },
          { name: 'DeployKey' },
          { name: 'DeployedEvent' },
          { name: 'Deployment' },
          { name: 'DeploymentEnvironmentChangedEvent' },
          { name: 'DeploymentStatus' },
          { name: 'ExternalIdentity' },
          { name: 'Gist' },
          { name: 'GistComment' },
          { name: 'HeadRefDeletedEvent' },
          { name: 'HeadRefForcePushedEvent' },
          { name: 'HeadRefRestoredEvent' },
          { name: 'Issue' },
          { name: 'IssueComment' },
          { name: 'Label' },
          { name: 'LabeledEvent' },
          { name: 'Language' },
          { name: 'License' },
          { name: 'LockedEvent' },
          { name: 'MarketplaceCategory' },
          { name: 'MarketplaceListing' },
          { name: 'MentionedEvent' },
          { name: 'MergedEvent' },
          { name: 'Milestone' },
          { name: 'MilestonedEvent' },
          { name: 'MovedColumnsInProjectEvent' },
          { name: 'Organization' },
          { name: 'OrganizationIdentityProvider' },
          { name: 'OrganizationInvitation' },
          { name: 'PinnedEvent' },
          { name: 'Project' },
          { name: 'ProjectCard' },
          { name: 'ProjectColumn' },
          { name: 'PublicKey' },
          { name: 'PullRequest' },
          { name: 'PullRequestCommit' },
          { name: 'PullRequestCommitCommentThread' },
          { name: 'PullRequestReview' },
          { name: 'PullRequestReviewComment' },
          { name: 'PullRequestReviewThread' },
          { name: 'PushAllowance' },
          { name: 'Reaction' },
          { name: 'Ref' },
          { name: 'ReferencedEvent' },
          { name: 'Release' },
          { name: 'ReleaseAsset' },
          { name: 'RemovedFromProjectEvent' },
          { name: 'RenamedTitleEvent' },
          { name: 'ReopenedEvent' },
          { name: 'Repository' },
          { name: 'RepositoryInvitation' },
          { name: 'RepositoryTopic' },
          { name: 'ReviewDismissalAllowance' },
          { name: 'ReviewDismissedEvent' },
          { name: 'ReviewRequest' },
          { name: 'ReviewRequestRemovedEvent' },
          { name: 'ReviewRequestedEvent' },
          { name: 'SecurityAdvisory' },
          { name: 'Status' },
          { name: 'StatusContext' },
          { name: 'SubscribedEvent' },
          { name: 'Tag' },
          { name: 'Team' },
          { name: 'Topic' },
          { name: 'TransferredEvent' },
          { name: 'Tree' },
          { name: 'UnassignedEvent' },
          { name: 'UnlabeledEvent' },
          { name: 'UnlockedEvent' },
          { name: 'UnpinnedEvent' },
          { name: 'UnsubscribedEvent' },
          { name: 'User' },
          { name: 'UserBlockedEvent' },
          { name: 'UserContentEdit' },
          { name: 'UserStatus' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'UniformResourceLocatable',
        possibleTypes: [
          { name: 'Bot' },
          { name: 'ClosedEvent' },
          { name: 'Commit' },
          { name: 'CrossReferencedEvent' },
          { name: 'Issue' },
          { name: 'MergedEvent' },
          { name: 'Milestone' },
          { name: 'Organization' },
          { name: 'PullRequest' },
          { name: 'PullRequestCommit' },
          { name: 'Release' },
          { name: 'Repository' },
          { name: 'RepositoryTopic' },
          { name: 'ReviewDismissedEvent' },
          { name: 'User' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Actor',
        possibleTypes: [
          { name: 'Bot' },
          { name: 'Organization' },
          { name: 'User' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'RegistryPackageOwner',
        possibleTypes: [
          { name: 'Organization' },
          { name: 'Repository' },
          { name: 'User' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'ProjectOwner',
        possibleTypes: [
          { name: 'Organization' },
          { name: 'Repository' },
          { name: 'User' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Closable',
        possibleTypes: [
          { name: 'Issue' },
          { name: 'Milestone' },
          { name: 'Project' },
          { name: 'PullRequest' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Updatable',
        possibleTypes: [
          { name: 'CommitComment' },
          { name: 'GistComment' },
          { name: 'Issue' },
          { name: 'IssueComment' },
          { name: 'Project' },
          { name: 'PullRequest' },
          { name: 'PullRequestReview' },
          { name: 'PullRequestReviewComment' }
        ]
      },
      {
        kind: 'UNION',
        name: 'ProjectCardItem',
        possibleTypes: [{ name: 'Issue' }, { name: 'PullRequest' }]
      },
      {
        kind: 'INTERFACE',
        name: 'Assignable',
        possibleTypes: [{ name: 'Issue' }, { name: 'PullRequest' }]
      },
      {
        kind: 'INTERFACE',
        name: 'Comment',
        possibleTypes: [
          { name: 'CommitComment' },
          { name: 'GistComment' },
          { name: 'Issue' },
          { name: 'IssueComment' },
          { name: 'PullRequest' },
          { name: 'PullRequestReview' },
          { name: 'PullRequestReviewComment' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'UpdatableComment',
        possibleTypes: [
          { name: 'CommitComment' },
          { name: 'GistComment' },
          { name: 'Issue' },
          { name: 'IssueComment' },
          { name: 'PullRequest' },
          { name: 'PullRequestReview' },
          { name: 'PullRequestReviewComment' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Labelable',
        possibleTypes: [{ name: 'Issue' }, { name: 'PullRequest' }]
      },
      {
        kind: 'INTERFACE',
        name: 'Lockable',
        possibleTypes: [{ name: 'Issue' }, { name: 'PullRequest' }]
      },
      {
        kind: 'INTERFACE',
        name: 'RegistryPackageSearch',
        possibleTypes: [{ name: 'Organization' }, { name: 'User' }]
      },
      {
        kind: 'INTERFACE',
        name: 'RepositoryOwner',
        possibleTypes: [{ name: 'Organization' }, { name: 'User' }]
      },
      {
        kind: 'INTERFACE',
        name: 'MemberStatusable',
        possibleTypes: [{ name: 'Organization' }, { name: 'Team' }]
      },
      {
        kind: 'INTERFACE',
        name: 'ProfileOwner',
        possibleTypes: [{ name: 'Organization' }, { name: 'User' }]
      },
      {
        kind: 'UNION',
        name: 'PinnableItem',
        possibleTypes: [{ name: 'Gist' }, { name: 'Repository' }]
      },
      {
        kind: 'INTERFACE',
        name: 'Starrable',
        possibleTypes: [
          { name: 'Gist' },
          { name: 'Repository' },
          { name: 'Topic' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Deletable',
        possibleTypes: [
          { name: 'CommitComment' },
          { name: 'GistComment' },
          { name: 'IssueComment' },
          { name: 'PullRequestReview' },
          { name: 'PullRequestReviewComment' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Reactable',
        possibleTypes: [
          { name: 'CommitComment' },
          { name: 'Issue' },
          { name: 'IssueComment' },
          { name: 'PullRequest' },
          { name: 'PullRequestReview' },
          { name: 'PullRequestReviewComment' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'RepositoryInfo',
        possibleTypes: [{ name: 'Repository' }]
      },
      {
        kind: 'INTERFACE',
        name: 'GitObject',
        possibleTypes: [
          { name: 'Blob' },
          { name: 'Commit' },
          { name: 'Tag' },
          { name: 'Tree' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'RepositoryNode',
        possibleTypes: [
          { name: 'CommitComment' },
          { name: 'CommitCommentThread' },
          { name: 'Issue' },
          { name: 'IssueComment' },
          { name: 'PullRequest' },
          { name: 'PullRequestCommitCommentThread' },
          { name: 'PullRequestReview' },
          { name: 'PullRequestReviewComment' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Subscribable',
        possibleTypes: [
          { name: 'Commit' },
          { name: 'Issue' },
          { name: 'PullRequest' },
          { name: 'Repository' },
          { name: 'Team' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'GitSignature',
        possibleTypes: [
          { name: 'GpgSignature' },
          { name: 'SmimeSignature' },
          { name: 'UnknownSignature' }
        ]
      },
      {
        kind: 'UNION',
        name: 'RequestedReviewer',
        possibleTypes: [{ name: 'User' }, { name: 'Team' }]
      },
      {
        kind: 'UNION',
        name: 'PullRequestTimelineItem',
        possibleTypes: [
          { name: 'Commit' },
          { name: 'CommitCommentThread' },
          { name: 'PullRequestReview' },
          { name: 'PullRequestReviewThread' },
          { name: 'PullRequestReviewComment' },
          { name: 'IssueComment' },
          { name: 'ClosedEvent' },
          { name: 'ReopenedEvent' },
          { name: 'SubscribedEvent' },
          { name: 'UnsubscribedEvent' },
          { name: 'MergedEvent' },
          { name: 'ReferencedEvent' },
          { name: 'CrossReferencedEvent' },
          { name: 'AssignedEvent' },
          { name: 'UnassignedEvent' },
          { name: 'LabeledEvent' },
          { name: 'UnlabeledEvent' },
          { name: 'MilestonedEvent' },
          { name: 'DemilestonedEvent' },
          { name: 'RenamedTitleEvent' },
          { name: 'LockedEvent' },
          { name: 'UnlockedEvent' },
          { name: 'DeployedEvent' },
          { name: 'DeploymentEnvironmentChangedEvent' },
          { name: 'HeadRefDeletedEvent' },
          { name: 'HeadRefRestoredEvent' },
          { name: 'HeadRefForcePushedEvent' },
          { name: 'BaseRefForcePushedEvent' },
          { name: 'ReviewRequestedEvent' },
          { name: 'ReviewRequestRemovedEvent' },
          { name: 'ReviewDismissedEvent' },
          { name: 'UserBlockedEvent' }
        ]
      },
      {
        kind: 'UNION',
        name: 'Closer',
        possibleTypes: [{ name: 'Commit' }, { name: 'PullRequest' }]
      },
      {
        kind: 'UNION',
        name: 'ReferencedSubject',
        possibleTypes: [{ name: 'Issue' }, { name: 'PullRequest' }]
      },
      {
        kind: 'UNION',
        name: 'MilestoneItem',
        possibleTypes: [{ name: 'Issue' }, { name: 'PullRequest' }]
      },
      {
        kind: 'UNION',
        name: 'RenamedTitleSubject',
        possibleTypes: [{ name: 'Issue' }, { name: 'PullRequest' }]
      },
      {
        kind: 'UNION',
        name: 'PullRequestTimelineItems',
        possibleTypes: [
          { name: 'PullRequestCommit' },
          { name: 'PullRequestCommitCommentThread' },
          { name: 'PullRequestReview' },
          { name: 'PullRequestReviewThread' },
          { name: 'PullRequestRevisionMarker' },
          { name: 'BaseRefChangedEvent' },
          { name: 'BaseRefForcePushedEvent' },
          { name: 'DeployedEvent' },
          { name: 'DeploymentEnvironmentChangedEvent' },
          { name: 'HeadRefDeletedEvent' },
          { name: 'HeadRefForcePushedEvent' },
          { name: 'HeadRefRestoredEvent' },
          { name: 'MergedEvent' },
          { name: 'ReviewDismissedEvent' },
          { name: 'ReviewRequestedEvent' },
          { name: 'ReviewRequestRemovedEvent' },
          { name: 'IssueComment' },
          { name: 'CrossReferencedEvent' },
          { name: 'AddedToProjectEvent' },
          { name: 'AssignedEvent' },
          { name: 'ClosedEvent' },
          { name: 'CommentDeletedEvent' },
          { name: 'ConvertedNoteToIssueEvent' },
          { name: 'DemilestonedEvent' },
          { name: 'LabeledEvent' },
          { name: 'LockedEvent' },
          { name: 'MentionedEvent' },
          { name: 'MilestonedEvent' },
          { name: 'MovedColumnsInProjectEvent' },
          { name: 'PinnedEvent' },
          { name: 'ReferencedEvent' },
          { name: 'RemovedFromProjectEvent' },
          { name: 'RenamedTitleEvent' },
          { name: 'ReopenedEvent' },
          { name: 'SubscribedEvent' },
          { name: 'TransferredEvent' },
          { name: 'UnassignedEvent' },
          { name: 'UnlabeledEvent' },
          { name: 'UnlockedEvent' },
          { name: 'UserBlockedEvent' },
          { name: 'UnpinnedEvent' },
          { name: 'UnsubscribedEvent' }
        ]
      },
      {
        kind: 'UNION',
        name: 'IssueOrPullRequest',
        possibleTypes: [{ name: 'Issue' }, { name: 'PullRequest' }]
      },
      {
        kind: 'UNION',
        name: 'IssueTimelineItem',
        possibleTypes: [
          { name: 'Commit' },
          { name: 'IssueComment' },
          { name: 'CrossReferencedEvent' },
          { name: 'ClosedEvent' },
          { name: 'ReopenedEvent' },
          { name: 'SubscribedEvent' },
          { name: 'UnsubscribedEvent' },
          { name: 'ReferencedEvent' },
          { name: 'AssignedEvent' },
          { name: 'UnassignedEvent' },
          { name: 'LabeledEvent' },
          { name: 'UnlabeledEvent' },
          { name: 'UserBlockedEvent' },
          { name: 'MilestonedEvent' },
          { name: 'DemilestonedEvent' },
          { name: 'RenamedTitleEvent' },
          { name: 'LockedEvent' },
          { name: 'UnlockedEvent' },
          { name: 'TransferredEvent' }
        ]
      },
      {
        kind: 'UNION',
        name: 'IssueTimelineItems',
        possibleTypes: [
          { name: 'IssueComment' },
          { name: 'CrossReferencedEvent' },
          { name: 'AddedToProjectEvent' },
          { name: 'AssignedEvent' },
          { name: 'ClosedEvent' },
          { name: 'CommentDeletedEvent' },
          { name: 'ConvertedNoteToIssueEvent' },
          { name: 'DemilestonedEvent' },
          { name: 'LabeledEvent' },
          { name: 'LockedEvent' },
          { name: 'MentionedEvent' },
          { name: 'MilestonedEvent' },
          { name: 'MovedColumnsInProjectEvent' },
          { name: 'PinnedEvent' },
          { name: 'ReferencedEvent' },
          { name: 'RemovedFromProjectEvent' },
          { name: 'RenamedTitleEvent' },
          { name: 'ReopenedEvent' },
          { name: 'SubscribedEvent' },
          { name: 'TransferredEvent' },
          { name: 'UnassignedEvent' },
          { name: 'UnlabeledEvent' },
          { name: 'UnlockedEvent' },
          { name: 'UserBlockedEvent' },
          { name: 'UnpinnedEvent' },
          { name: 'UnsubscribedEvent' }
        ]
      },
      {
        kind: 'UNION',
        name: 'ReviewDismissalAllowanceActor',
        possibleTypes: [{ name: 'User' }, { name: 'Team' }]
      },
      {
        kind: 'UNION',
        name: 'PushAllowanceActor',
        possibleTypes: [{ name: 'User' }, { name: 'Team' }]
      },
      {
        kind: 'UNION',
        name: 'PermissionGranter',
        possibleTypes: [
          { name: 'Organization' },
          { name: 'Repository' },
          { name: 'Team' }
        ]
      },
      {
        kind: 'INTERFACE',
        name: 'Contribution',
        possibleTypes: [
          { name: 'CreatedCommitContribution' },
          { name: 'CreatedIssueContribution' },
          { name: 'CreatedPullRequestContribution' },
          { name: 'CreatedPullRequestReviewContribution' },
          { name: 'CreatedRepositoryContribution' },
          { name: 'JoinedGitHubContribution' },
          { name: 'RestrictedContribution' }
        ]
      },
      {
        kind: 'UNION',
        name: 'CreatedRepositoryOrRestrictedContribution',
        possibleTypes: [
          { name: 'CreatedRepositoryContribution' },
          { name: 'RestrictedContribution' }
        ]
      },
      {
        kind: 'UNION',
        name: 'CreatedIssueOrRestrictedContribution',
        possibleTypes: [
          { name: 'CreatedIssueContribution' },
          { name: 'RestrictedContribution' }
        ]
      },
      {
        kind: 'UNION',
        name: 'CreatedPullRequestOrRestrictedContribution',
        possibleTypes: [
          { name: 'CreatedPullRequestContribution' },
          { name: 'RestrictedContribution' }
        ]
      },
      {
        kind: 'UNION',
        name: 'SearchResultItem',
        possibleTypes: [
          { name: 'Issue' },
          { name: 'PullRequest' },
          { name: 'Repository' },
          { name: 'User' },
          { name: 'Organization' },
          { name: 'MarketplaceListing' }
        ]
      },
      {
        kind: 'UNION',
        name: 'CollectionItemContent',
        possibleTypes: [
          { name: 'Repository' },
          { name: 'Organization' },
          { name: 'User' }
        ]
      }
    ]
  }
};
